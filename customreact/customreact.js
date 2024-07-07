const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for (const prop in reactElement.props) {
    if(prop=='children') continue
    domElement.setAttribute(prop,reactElement.props[prop])
  
}
const reactElement = {
    type:"a",
    props:{
        href:"",
        target:"_blank"
    },
    children:"Click me here"
    
}

const root = document.querySelector("#root") 
root.render()