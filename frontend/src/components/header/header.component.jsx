import React from "react";
import { Appbar } from 'react-native-paper';
import { headerStyle } from "./header.style";

export const HeaderComponent = ({title, navigation}) => {
    return(
        <Appbar>
          <Appbar.BackAction onPress={() => navigation.goBack()}/>
          <Appbar.Content title={title} />
        </Appbar>
    )
}