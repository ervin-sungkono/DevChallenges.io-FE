import Button from '@/components/Button'
import Head from 'next/head'
import { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

export default function Home() {
  const [variant, setVariant] = useState("filled")
  const [color, setColor] = useState("default")
  const [size, setSize] = useState("md")
  const [disabled, setDisabled] = useState(false)
  const [disableShadow, setDisableShadow] = useState(false)
  const [startIcon, setStartIcon] = useState("")
  const [endIcon, setEndIcon] = useState("")
  const [content, setContent] = useState("Click me!")
  const [alertMessage, setAlertMessage] = useState("Hello World!")

  const variantList = ["filled","outline","text"]
  const colorList = ["default","primary","secondary","danger"]
  const sizeList = ["sm", "md", "lg"]
  const iconList = [
    {label: "None", icon: ""},
    {label: "Search", icon: "search"},
    {label: "Home", icon: "home"},
    {label: "Menu", icon: "menu"},
    {label: "Favorite", icon: "favorite"},
    {label: "Add", icon: "add"},
    {label: "Delete", icon: "delete"}
  ]

  const showAlert = () => {
    alert(alertMessage)
  }
  
  return (
    <>
      <Head>
        <title>Button Component</title>
        <meta name="description" content="Button Components for DevChallenges.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/devchallenges.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
      <main className='container'>
        <h2>Button Component</h2>
        <div className='content'>
          <div className='btn-preview-card'>
            <Button
              variant={variant}
              color={color}
              size={size}
              disabled={disabled}
              disableShadow={disableShadow}
              startIcon={startIcon}
              endIcon={endIcon}
              onClick={showAlert}
            >
              {content}
            </Button>
          </div>
          <div className='form'>
              <div className='input-group'>
                <label for="variant" style={{fontWeight: 600}}>Variant</label>
                <div className='radio-group'>
                  {variantList.map((variant, index) => (
                    <div className='radio-option' key={index}>
                      <input type="radio" id={variant} name="variant" value={variant} onChange={(e) => setVariant(e.target.value)} defaultChecked={variant === "filled"}/>
                      <label for={variant}>{variant}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className='input-group'>
                <label for="color" style={{fontWeight: 600}}>Color</label>
                <div className='radio-group'>
                  {colorList.map((color, index) => (
                    <div className='radio-option' key={index}>
                      <input type="radio" id={color} name="color" value={color} onChange={(e) => setColor(e.target.value)} defaultChecked={color === "default"}/>
                      <label for={color}>{color}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className='input-group'>
                <label for="size" style={{fontWeight: 600}}>Size</label>
                <div className='radio-group'>
                  {sizeList.map((size, index) => (
                    <div className='radio-option' key={index}>
                      <input type="radio" id={size} name="size" value={size} onChange={(e) => setSize(e.target.value)} defaultChecked={size === "md"}/>
                      <label for={size}>{size}</label>
                    </div>
                  ))}
                </div>
              </div>
              <div className='input-group'>
                <label for="icon" style={{fontWeight: 600}}>Icon</label>
                <div className='select-group'>
                  <label for="start">Start</label>
                  <select id='start' onChange={(e) => setStartIcon(e.target.value)}>(
                    {iconList.map((icon, index) => (
                      <option key={index} value={icon.icon}>{icon.label}</option>
                    ))}
                  </select>
                  <label for="end">End</label>
                  <select onChange={(e) => setEndIcon(e.target.value)}>(
                    {iconList.map((icon, index) => (
                      <option key={index} value={icon.icon}>{icon.label}</option>
                    ))}
                  </select>
                </div>
              </div> 
              <div className='input-group'>
                <div className='radio-group'>
                  <div className='radio-option'>
                    <input id='disabled' type='checkbox' onChange={(e) => setDisabled(e.target.checked)}/>
                    <label for="disabled" style={{fontWeight: 600}}>Disabled</label>
                  </div>
                  <div>
                    <input id='disableShadow' type='checkbox' onChange={(e) => setDisableShadow(e.target.checked)}/>
                    <label for="disableShadow" style={{fontWeight: 600}}>Disable Shadow</label>
                  </div>
                </div>
              </div> 
              <div className='input-group'>
                <label for="content" style={{fontWeight: 600}}>Content</label>
                <input id='content' type='text' value={content} onChange={(e) => setContent(e.target.value)}/>
              </div>
              <div className='input-group'>
                <label for="alert-message" style={{fontWeight: 600}}>Alert Message</label>
                <input id='alert-message' type='text' value={alertMessage} onChange={(e) => setAlertMessage(e.target.value)}/>
              </div>
          </div>
        </div>
        <div style={{width: '100%'}}>
          <CopyBlock
            text={`import Button from '@/components/Button' 

<Button${variant === "filled" ? "" : ` variant="${variant}"`}${color === "default" ? "" : ` color="${color}"`}${size === "md" ? "" : ` size="${size}"`}${startIcon === "" ? "" : ` startIcon="${startIcon}"`}${endIcon === "" ? "" : ` endIcon="${endIcon}"`}${disabled ? " disabled" : ""}${disableShadow ? " disableShadow" : ""} onClick={showAlert}>
    ${content}
<Button/>`}
            languange="jsx"
            theme={dracula}
            codeBlock
            wrapLines={true}
          />
        </div>
      </main>
    </>
  )
}
