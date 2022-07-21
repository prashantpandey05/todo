import React,{useState} from 'react'
import Header from './components/Header.js'
import NewTodoForm from './components/NewTodoForm.js'
import ToDoList from './components/ToDoList.js'

export default function App(){
    const todos = [{
        "id": 1,
        "title": "Universal systematic project",
        "description": "Upgradable logistical monitoring",
        "done": true,
        "date": "14/03/2022"
      }, {
        "id": 2,
        "title": "Up-sized system-worthy budgetary management",
        "description": "Versatile contextually-based database",
        "done": false,
        "date": "17/07/2021"
      }, {
        "id": 3,
        "title": "Horizontal composite function",
        "description": "Re-engineered leading edge collaboration",
        "done": false,
        "date": "25/11/2021"
      }, {
        "id": 4,
        "title": "Fundamental homogeneous knowledge base",
        "description": "Persistent 24/7 task-force",
        "done": true,
        "date": "24/01/2022"
      }, {
        "id": 5,
        "title": "Up-sized 24/7 emulation",
        "description": "Inverse impactful artificial intelligence",
        "done": false,
        "date": "22/05/2022"
      }, {
        "id": 6,
        "title": "Intuitive reciprocal hardware",
        "description": "Triple-buffered motivating productivity",
        "done": false,
        "date": "28/10/2021"
      }, {
        "id": 7,
        "title": "Stand-alone actuating project",
        "description": "Cross-group bifurcated architecture",
        "done": false,
        "date": "05/05/2022"
      }, {
        "id": 8,
        "title": "Devolved bottom-line benchmark",
        "description": "Integrated global knowledge base",
        "done": false,
        "date": "13/02/2022"
      }, {
        "id": 9,
        "title": "Synchronised web-enabled projection",
        "description": "Fundamental foreground neural-net",
        "done": false,
        "date": "16/07/2021"
      }, {
        "id": 10,
        "title": "Organic bandwidth-monitored implementation",
        "description": "Focused discrete strategy",
        "done": true,
        "date": "20/11/2021"
      }, {
        "id": 11,
        "title": "Phased bottom-line service-desk",
        "description": "Configurable actuating forecast",
        "done": false,
        "date": "01/12/2021"
      }, {
        "id": 12,
        "title": "Vision-oriented stable concept",
        "description": "Digitized hybrid strategy",
        "done": true,
        "date": "05/02/2022"
      }, {
        "id": 13,
        "title": "Object-based responsive groupware",
        "description": "Reverse-engineered modular process improvement",
        "done": false,
        "date": "15/08/2021"
      }, {
        "id": 14,
        "title": "Networked hybrid application",
        "description": "User-centric logistical function",
        "done": true,
        "date": "03/07/2022"
      }, {
        "id": 15,
        "title": "Reactive grid-enabled workforce",
        "description": "Re-engineered analyzing challenge",
        "done": true,
        "date": "13/03/2022"
      }, {
        "id": 16,
        "title": "Enterprise-wide reciprocal encoding",
        "description": "Grass-roots system-worthy middleware",
        "done": true,
        "date": "29/01/2022"
      }, {
        "id": 17,
        "title": "Profit-focused empowering strategy",
        "description": "Virtual multi-state hierarchy",
        "done": true,
        "date": "06/10/2021"
      }, {
        "id": 18,
        "title": "Ergonomic directional model",
        "description": "Multi-channelled next generation application",
        "done": false,
        "date": "14/06/2022"
      }, {
        "id": 19,
        "title": "Synchronised background throughput",
        "description": "Multi-lateral bi-directional function",
        "done": false,
        "date": "21/08/2021"
      }, {
        "id": 20,
        "title": "Implemented analyzing core",
        "description": "Operative 6th generation intranet",
        "done": false,
        "date": "02/12/2021"
      }, {
        "id": 21,
        "title": "Switchable mission-critical initiative",
        "description": "Future-proofed leading edge service-desk",
        "done": true,
        "date": "11/06/2022"
      }, {
        "id": 22,
        "title": "Stand-alone multimedia hardware",
        "description": "Mandatory reciprocal protocol",
        "done": true,
        "date": "03/08/2021"
      }, {
        "id": 23,
        "title": "Stand-alone analyzing analyzer",
        "description": "Secured well-modulated superstructure",
        "done": false,
        "date": "05/10/2021"
      }, {
        "id": 24,
        "title": "Multi-layered local workforce",
        "description": "Fully-configurable attitude-oriented encryption",
        "done": false,
        "date": "27/07/2021"
      }, {
        "id": 25,
        "title": "Multi-layered multimedia knowledge user",
        "description": "Monitored systematic concept",
        "done": true,
        "date": "14/08/2021"
      }]
      
      let [isOpen, setIsOpen] = useState(false);

      return (
        <div>
       <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
       <ToDoList todos={todos} />
       <NewTodoForm isOpen={isOpen} setIsOpen={setIsOpen}/>
    
       </div>
      )
    }