import { StyleSheet } from "react-native"

export const globalColors = {
   primary:   "#274156", // #274156
   secondary: "#9BABA4", // #9BABA4
   tertiary:  "#820000", // #820000
   
   dark:      "#151414", // #151414
   lightGray: '#e0e0e0', // #c2c2c2
   
   background: "#ffffff",// #ffffff
}

export const globalStyles = StyleSheet.create({
   titleCarrusel: {
      fontSize: 30,
      fontWeight: '400',
      marginLeft: 10,
      marginBottom: 10,
      color: globalColors.dark
   }
})