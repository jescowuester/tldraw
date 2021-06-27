Welcome to the documentation for tldraw's code editor. You can use the code editor to create shapes using JavaScript or TypeScript code.

```ts 
const rect = new Rectangle({
  point: [100, 100],
  size: [200, 200],
  style: {
    color: ColorStyle.Blue
  }
})

rect.x = 300
```

To run your code, press **Command + S**. 

Your new shapes will appear on the canvas. You can interact with code-created shapes just like any other shape: you can move the shape, change its style, delete it, etc.

Each time you run your code, any existing code-created shapes will be replaced by your new code-created shapes. If you want to keep your code-created shapes, select the shapes that you want to keep, press **Command + D** to duplicate them, and move them off to the side.

## Shapes

You can use the code editor to create any of the regular shapes:

- Draw
- Rectangle
- Ellipse
- Arrow
- Text

You can also create shapes that can _only_ be created with code:

- Dot
- Ray
- Line
- Polyline

Each of these shapes is a `class`. To create the shape, use the following syntax:

```ts 
const myShape = new Rectangle()
```

You can also create a shape with custom properties like this:

```ts 
const myShape = new Rectangle({
  point: [100, 100],
  size: [200, 200],
  style: {
    color: ColorStyle.Blue,
    size: SizeStyle.Large,
    dash: DashStyle.Dotted
  }
})
```

Once you've created a shape, you can set its properties like this:

```ts 
const myShape = new Rectangle()

myShape.x = 100
myShape.color = ColorStyle.Red
```


You can find more information on each shape class by clicking its name in the list above.

## Controls

In addition to shapes, you can also use code to create controls.

```ts
new NumberControl({
  label: "x",
  value: 0
})

const myShape = new Rectangle({
  point: [controls.x, 0]
})
```

Once you've created a control, the app's will display a panel where you can edit the control's value. As you edit the value, your code will run again with the control's new value.

There are two kinds of controls:

- NumberControl
- VectorControl
- TextControl

Each of these controls is a `class`. To create the control, use the following syntax:

```ts 
const control = new TextControl({
  label: "myLabel",
  value: "my value"
})
```

Once you've created a control, you can use its value in your code like this:

```ts
const myShape = new Text({
  text: controls.myLabel
})
```

You can find more information on each control class by clicking its name in the list above.


## Shape Classes

...

## Control Classes

...