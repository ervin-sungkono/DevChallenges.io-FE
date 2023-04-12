import Input from '@/components/Input'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'

export default function Home() {
  const [type, setType] = useState("text")
  const [size, setSize] = useState("md")
  const [error, setError] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [fullWidth, setFullWidth] = useState(false)
  const [multiline, setMultiline] = useState(false)
  const [rowCount, setRowCount] = useState(4)
  const [startIcon, setStartIcon] = useState("")
  const [endIcon, setEndIcon] = useState("")
  const [name, setName] = useState("input-test")
  const [label, setLabel] = useState("Label")
  const [value, setValue] = useState("Text")
  const [placeholder, setPlaceholder] = useState("Placeholder")
  const [helperText, setHelperText] = useState("this is a helper text")

  const typeList = ["text", "password"]
  const sizeList = ["sm", "md"]
  const iconList = [
    {label: "None", icon: ""},
    {label: "Search", icon: "search"},
    {label: "Home", icon: "home"},
    {label: "Menu", icon: "menu"},
    {label: "Favorite", icon: "favorite"},
    {label: "Add", icon: "add"},
    {label: "Delete", icon: "delete"}
  ]
  
  return (
    <>
      <Head>
        <title>Input Component</title>
        <meta name="description" content="Input Components for DevChallenges.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/devchallenges.png" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
      <main className='container'>
        <h2>Input Component</h2>
        <div className='content'>
          <div className='btn-preview-card'>
            <Input
              size={size}
              error={error}
              disabled={disabled}
              fullWidth={fullWidth}
              startIcon={startIcon}
              endIcon={endIcon}
              type={type}
              multiline={multiline}
              row={rowCount}
              name={name}
              label={label}
              value={value}
              placeholder={placeholder}
              helperText={helperText}
            />
          </div>
          <div className='form'>
              <div className='input-group'>
                <label for="type" style={{fontWeight: 600}}>Type</label>
                <div className='radio-group'>
                  {typeList.map((type, index) => (
                    <div className='radio-option' key={index}>
                      <input type="radio" id={type} name="type" value={type} onChange={(e) => setType(e.target.value)} defaultChecked={type === "text"}/>
                      <label for={type}>{type}</label>
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
                    <input id='error' type='checkbox' onChange={(e) => setError(e.target.checked)}/>
                    <label for="error" style={{fontWeight: 600}}>Error</label>
                  </div>
                  <div>
                    <input id='full-width' type='checkbox' onChange={(e) => setFullWidth(e.target.checked)}/>
                    <label for="full-width" style={{fontWeight: 600}}>Full Width</label>
                  </div>
                  <div className='radio-option'>
                    <input id='disabled' type='checkbox' onChange={(e) => setDisabled(e.target.checked)}/>
                    <label for="disabled" style={{fontWeight: 600}}>Disabled</label>
                  </div>
                  <div>
                    <input id='multiline' type='checkbox' onChange={(e) => setMultiline(e.target.checked)}/>
                    <label for="multiline" style={{fontWeight: 600}}>Multiline</label>
                  </div>
                </div>
              </div> 
              <div className='input-group'>
                <label for="row" style={{fontWeight: 600}}>Row Count</label>
                <input id='row' type='number' value={rowCount} onChange={(e) => setRowCount(e.target.value)}/>
              </div>
              <div className='input-group'>
                <label for="label" style={{fontWeight: 600}}>Label</label>
                <input id='label' type='text' value={label} onChange={(e) => setLabel(e.target.value)}/>
              </div>
              <div className='input-group'>
                <label for="value" style={{fontWeight: 600}}>Default Value</label>
                <input id='value' type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
              </div>
              <div className='input-group'>
                <label for="placeholder" style={{fontWeight: 600}}>Placeholder</label>
                <input id='placeholder' type='text' value={placeholder} onChange={(e) => setPlaceholder(e.target.value)}/>
              </div>
              <div className='input-group'>
                <label for="helper-text" style={{fontWeight: 600}}>Helper Text</label>
                <input id='helper-text' type='text' value={helperText} onChange={(e) => setHelperText(e.target.value)}/>
              </div>
          </div>
        </div>
        <div style={{width: '100%'}}>
          <CopyBlock
            text={`import Input from '@/components/Input' 

<Input
  size={"${size}"}${error ? '\n  error' : ""}${disabled ? '\n  disabled' : ""}${fullWidth ? '\n  fullWidth' : ""}${startIcon && `\n  startIcon={"${startIcon}"}`}${endIcon && `\n  endIcon={"${endIcon}"}`}\n  type={"${type}"}${multiline ? "\n  multiline" : ""}${rowCount ? `\n  row={${rowCount}}` : ""}\n  name={"${name}"}${label ? `\n  label={"${label}"}` : ""}${value ? `\n  value={"${value}"}` : ""}${placeholder ? `\n  placeholder={"${placeholder}"}` : ""}${helperText ? `\n  helperText={"${helperText}"}` : ""}
/>`}
            languange="jsx"
            theme={dracula}
            codeBlock
            wrapLines={true}
          />
        </div>
        <footer>Created by <Link href={"https://github.com/ervin-sungkono"} target='_blank'>Ervin Cahyadinata Sungkono</Link></footer>
      </main>
    </>
  )
}
