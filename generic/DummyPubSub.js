/**
 * PROJECT : FileName
 * ----------------------------------------------------------------------
 * Example of a very generic pub/sub, for state management.
 *
 * @author    Developer <mail@mail>
 * @since     0.0.1
 *
 * @returns {Object}
 * @constructor
 */
const PubSub = () => {
  /**
   * Holds all topics available for subscription and their actions.
   *
   * The object's keys are the topics, which hold an array with listener
   * functions, which in turn must accepts objects as a general input value,
   * and it must contain the information to be published/dispatched.
   *
   * IMPORTANT:
   * All methods/functions under the same topic will receive the same object.
   *
   * @type {Object}
   */
  let items = {};

  /**
   * Handle for `hasOwnProperty` method inside `items`.
   *
   * @type {function}
   */
  let hasOwn = items.hasOwnProperty;

  /**
   * Publishes an update to a `topic` inside `items`.
   *
   * IMPORTANT:
   * The `info` parameter gets passed to all listeners of the same topic.
   *
   * @param {string} topic
   * @param {Object} info
   * @private
   */
  const _publish = (topic, info) => {
    // Topic doesn't exist, stop
    if (!hasOwn.call(items, topic)) return;
    items[topic].forEach(item => {
      item(info !== undefined ? info : {});
    });
  };

  /**
   * Adds a listener to a topic, returns an object with unsubscribe method.
   *
   * @param {String} topic
   * @param {function} listener
   * @returns {Object}
   * @private
   */
  const _subscribe = (topic, listener) => {
    // Topic doesn't exist, create
    if (!hasOwn.call(items, topic)) items[topic] = [];

    // Push listener and return object with unsubscriber
    let _idx = items[topic].push(listener) - 1;

    return {
      unsubscribe: () => {
        delete items[topic][_idx];
      }
    };
  };

  // Public available aliases
  return {
    publish: _publish,
    subscribe: _subscribe
  };
};

// Export an instance of PubSub
// ----------------------------------------------------------------------
export default PubSub();
