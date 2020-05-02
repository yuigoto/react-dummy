/**
 * PROJECT : Component
 * ----------------------------------------------------------------------
 * Example of a navigator component for react-native.
 *
 * @author    Developer <mail@mail>
 * @since     0.0.1
 */

// Imports
import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import { DrawerItems } from "react-navigation";

// Component class
class Dummy extends Component {
  // Properties
  // --------------------------------------------------------------------

  // Constructor
  // -------------------------------------------------------------------

  /**
   * Constructor.
   * 
   * @param {Object} props 
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Methods
  // --------------------------------------------------------------------

  // Lifecycle Methods
  // --------------------------------------------------------------------

  /**
   * Renders the component.
   */
  render() {
    const { props, state } = this;

    return (
      <ScrollView>
        <View>
          <DrawerItems {...props}/>
        </View>
      </ScrollView>
    );
  }
}
