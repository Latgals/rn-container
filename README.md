# rn-container
React Native component for container layout.

Allows you to create a container for screen content without using a StyleSheet object. By setting the container parameters once, you ensure that all screens in your App display the same look.

You can set container's padding, background color, content alignment, control the display of the statusbar.

## Simple usage:

`<Container>

  //  {...Content here}
  
</Container>`

## Default params

In order not to set container properties for each screen, you can set the default property values yourself in the `container.js` file and then change only the necessary properties for the container that should be different from the others.

`container.js`

`const Container = (props) => {

  const {
  
    padding = 8,
    
    background = '#efefef',
    
    layout = 'default',
    
    statusbar = 'dark-content',
    
  } = props
  
  
  ...
  
  
}

export default Container;`

## Props

padding: [Number],

background: [Color Style String],

layout: [String] - Available values: 'top-left' or 'default', 'top-center', 'center' (positions content in the center vertically and horizontally), 'center-left'

statusbar: [String] - Available values: 'dark-content', 'light-content' or 'hidden' (hides the statusbar on the screen) 

