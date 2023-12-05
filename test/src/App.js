import {useState,React,useEffect} from 'react';
import './style.css'

function App() {
  const [objs,setobj] = useState([])
  let [postInfo,setPostInfo] = useState({
    title:'',
    content:'',
  })

  const newObj = {
    title: postInfo.title,
    key: 1,
    content: postInfo.content,
  }

  console.log(newObj)

  const add = () => {
    if(postInfo.title,postInfo.content != ''){
      if (objs[0] != undefined){
        newObj.key = objs[objs.length - 1].key + 1
      }
  
      setobj([...objs,newObj])
      setPostInfo({title:'', content:''})
    }
    else{
      console.log('hello')
    }
  }

  const del = (key) => {
    setobj(objs.filter(obj => obj.key != key))
  }

  const objsHtml = objs.map(obj =>
    <div key={obj.key}>
      <h1>{obj.title}</h1>
      <p>key:{obj.key}</p>
      <p>{obj.content}</p>
      <button onClick={() => del(obj.key)}>delete</button>
    </div>  
  )

  return (
      <div>
        <section className='bg-primary-darker header'>
          <h1>Create new post!</h1>
          <input value={postInfo.title} placeholder='title' onChange={title => setPostInfo({...postInfo,title:title.target.value})}></input>
          <textarea value={postInfo.content} placeholder='content' onChange={content => setPostInfo({...postInfo,content:content.target.value})}></textarea>
          <button onClick={add}>add</button>
        </section>
        <section>
          {objsHtml}
        </section>
      </div>
  );
}

export default App;
