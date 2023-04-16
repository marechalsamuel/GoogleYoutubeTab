const DEFAULT_OPTIONS = {
  openInNewWindow: true,
}
const TABS_CLASS_NAME = 'hdtb-mitem'
const ICONS_CLASS_NAME = 'bmaJhd iJddsb'
const SEARCH_VAR_NAME = '%search%'

const createTab = ({label, url, icon, customOptions = {}}) => {
  console.log({label, url, icon, customOptions})
  const id = `google-${label.toLowerCase()}-tab`
  const options = {
    ...DEFAULT_OPTIONS,
    ...customOptions,
  }
  const tab = document.getElementById(id)
  if(!tab) {
    const search = new URLSearchParams(window.location.search).get('q')
  
    const container = document.createElement('div')
    container.className = TABS_CLASS_NAME
    container.id = id
  
    const link = document.createElement('a')
    link.href = url.replace(SEARCH_VAR_NAME, search)
    link.target = options.openInNewWindow ? '_blank' : '_self'
    link.innerText = label
    link.prepend(icon)
    container.append(link)
  
    const brother = document.getElementsByClassName(TABS_CLASS_NAME)[1]
    brother.parentNode.insertBefore(container, brother)
  }
}


const createIcon = (pathD) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('focusable', 'false')
  svg.setAttribute('viewBox', '0 0 24 24')

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  path.setAttribute('d', pathD)
  svg.appendChild(path)

  const icon = document.createElement('span')
  icon.className = ICONS_CLASS_NAME
  icon.style.height = '16px'
  icon.style.width = '16px'

  svg.appendChild(path)
  icon.appendChild(svg)
  return icon
}

const tabs = [
  {
    label: 'Twitter',
    url: `https://twitter.com/search?q=${SEARCH_VAR_NAME}&f=live`,
    icon: createIcon('M22,3.999c-0.78,0.463 -2.345,1.094 -3.265,1.276c-0.027,0.007 -0.049,0.016 -0.075,0.023c-0.813,-0.802 -1.927,-1.299 -3.16,-1.299c-2.485,0 -4.5,2.015 -4.5,4.5c0,0.131 -0.011,0.372 0,0.5c-3.353,0 -5.905,-1.756 -7.735,-4c-0.199,0.5 -0.286,1.29 -0.286,2.032c0,1.401 1.095,2.777 2.8,3.63c-0.314,0.081 -0.66,0.139 -1.02,0.139c-0.581,0 -1.196,-0.153 -1.759,-0.617c0,0.017 0,0.033 0,0.051c0,1.958 2.078,3.291 3.926,3.662c-0.375,0.221 -1.131,0.243 -1.5,0.243c-0.26,0 -1.18,-0.119 -1.426,-0.165c0.514,1.605 2.368,2.507 4.135,2.539c-1.382,1.084 -2.341,1.486 -5.171,1.486h-0.964c1.788,1.146 4.065,2.001 6.347,2.001c7.43,0 11.653,-5.663 11.653,-11.001c0,-0.086 -0.002,-0.266 -0.005,-0.447c0,-0.018 0.005,-0.035 0.005,-0.053c0,-0.027 -0.008,-0.053 -0.008,-0.08c-0.003,-0.136 -0.006,-0.263 -0.009,-0.329c0.79,-0.57 1.475,-1.281 2.017,-2.091c-0.725,0.322 -1.503,0.538 -2.32,0.636c0.834,-0.5 2.019,-1.692 2.32,-2.636z'),
  },
  {
    label: 'Youtube',
    url: `https://www.youtube.com/results?search_query=${SEARCH_VAR_NAME}`,
    icon: createIcon('M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z'),
  },
];
tabs.forEach(createTab)
