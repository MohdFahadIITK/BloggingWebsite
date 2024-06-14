import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';

//pages
import NotFound from './NotFound';
//Components
import Articless from '../components/Articless';
import Clist from '../components/commentslist';
import AddCommentFrom from '../components/AddCommentFrom';

const Article = () => {
  const {name} = useParams();
  const article = articleContent.find((article)=> article.name==name);
  const [articleInfo,setArticleInfo]= useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      console.log("LOL");
      const result=await fetch(`http://localhost:8000/api/articles/${name}`);
      //console.log(result);
      const body=await result.json();
      console.log(body);
      setArticleInfo(body);
    }
    fetchData();
  },[name]);
  if(!article) return <NotFound/>;
  const otherArticles =articleContent.filter(article=> article.name!=name);
  return (
    <>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        {article.title}
      </h1>
      {article.content.map((paragraph,index)=>(
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
          {paragraph}
        </p>
      ))}
      <h3 className='sm:text-2xl text-xl font-bold my-6 text-gray-900'>
        Comments:
      </h3>
      <Clist comments={articleInfo}/>
      <AddCommentFrom articleName={name} setArticleInfo={setArticleInfo}/>
      <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articless articles={otherArticles} />
      </div>
    </>
  )
}

export default Article