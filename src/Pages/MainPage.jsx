import React from 'react';
import Header from '../Components/Header';
import Stories from '../Components/Snapgram/Stories';
import './MainPage.css';

import img1 from '../images/stories/img1.png';
import img2 from '../images/stories/img2.png';
import img3 from '../images/stories/img3.png';
import img4 from '../images/stories/img4.png';
import img5 from '../images/stories/img5.png';
import img6 from '../images/stories/img6.png';
import img7 from '../images/stories/img7.png';
import CompanyCard from '../Components/CompanyCard';

const MainPage = () => {
  
function buildItem(id, type, length, src, preview, link, seen, time){
  return {
		"id": id,
		"type": type,
		"length": length,
		"src": src,
		"preview": preview,
		"link": link,
		"seen": seen,
		"time": time
	};
}

const stories = [
	{
    id: "ramon",
		picture: img1,
		title: "",
		lastUpdated: 1492665454,
		items: [
			buildItem("ramon-1", "photo", 3, 'https://images.unsplash.com/photo-1649804150507-e16d0d32f4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVwZW5kZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1649804150507-e16d0d32f4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVwZW5kZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', '', false, 1492665454)
		]
	},
	{
		id: "gorillaz",
		picture: img2,
		title: "",
		link: "",
		lastUpdated: 1492665454,
		items: [
			buildItem("gorillaz-2", "photo", 0, 'https://media.istockphoto.com/id/1286273487/photo/road-to-recovery-with-sunbeam.jpg?b=1&s=170667a&w=0&k=20&c=bwPdutLy7gzCZFdg97lhyHcYOrLhetRvSLP8pzO3Xmc=', 'https://media.istockphoto.com/id/1286273487/photo/road-to-recovery-with-sunbeam.jpg?b=1&s=170667a&w=0&k=20&c=bwPdutLy7gzCZFdg97lhyHcYOrLhetRvSLP8pzO3Xmc=', '', false, 1492665454)
		]
	},
  {
    id: "ramon2",
		picture: img3,
		title: "",
		lastUpdated: 1492665454,
		items: [
			buildItem("ramon-3", "photo", 3, 'https://media.istockphoto.com/id/1297475407/photo/wants-needs-concept.jpg?b=1&s=170667a&w=0&k=20&c=H8cyw6uvF9Ilf25TotWa5vObS-KFXKxZ2te7H5b_DBs=', 'https://media.istockphoto.com/id/1297475407/photo/wants-needs-concept.jpg?b=1&s=170667a&w=0&k=20&c=H8cyw6uvF9Ilf25TotWa5vObS-KFXKxZ2te7H5b_DBs=', '', false, 1492665454)
		]
	},
	{
		id: "gorillaz2",
		picture: img4,
		title: "",
		link: "",
		lastUpdated: 1492665454,
		items: [
			buildItem("gorillaz-4", "photo", 0, 'https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', '', false, 1492665454)
		]
	},
  {
    id: "ramon3",
		picture: img5,
		title: "",
		lastUpdated: 1492665454,
		items: [
			buildItem("ramon-5", "photo", 3, 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', '', false, 1492665454)
		]
	},
	{
		id: "gorillaz6",
		picture: img6,
		title: "",
		link: "",
		lastUpdated: 1492665454,
		items: [
			buildItem("gorillaz-6", "photo", 0, 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', '', false, 1492665454)
		]
	},
  {
    id: "ramon7",
		picture: img7,
		title: "",
		lastUpdated: 1492665454,
		items: [
			buildItem("ramon-1", "photo", 30000, 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', '', false, 1492665454)
		]
	}
	
];
  return (
    <div className='main-page'>
      <Header/>
	  <div className='right-section'>
      	<Stories stories={stories}/>
		<CompanyCard/>
	  </div>
    </div>
  )
}

export default MainPage
