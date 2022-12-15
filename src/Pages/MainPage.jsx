import React from 'react';
import Campaigns from '../Components/Campaigns';
import Stories from '../Components/Snapgram/Stories';
import './MainPage.css';

import img1 from '../images/stories/img1.svg';
import img2 from '../images/stories/img2.svg';
import img3 from '../images/stories/img3.svg';
import img4 from '../images/stories/img4.svg';
import img5 from '../images/stories/img5.svg';
import img6 from '../images/stories/img6.svg';
import img7 from '../images/stories/img7.svg';
import img8 from '../images/stories/img8.svg';


import deminus from '../images/icontable/deminus.svg';
import enminus from '../images/icontable/enminus.svg';
import enplus from '../images/icontable/enplus.svg';
import CompanyCard from '../Components/CompanyCard';
import Chart from '../Components/Chart';
import StatisticTable from '../Components/StatisticTable';
import SideBar from '../Components/SideBar';

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
	},
	{
	  id: "ramon8",
		  picture: img8,
		  title: "",
		  lastUpdated: 1492665454,
		  items: [
			  buildItem("ramon-5", "photo", 30000, 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60', '', false, 1492665454)
		  ]
	  }
	
];

  return (
	<div className='mainpage-container'>
		<SideBar/>
		<div className="mainsection-container">
			<Stories stories={stories}/>
			<Chart/>
			<div className="statistic-tables-container">
				<StatisticTable headerTitle="Aggreement" month="January" p1icon={deminus} p1text="Gözləmədə" p1percent="8%" p2icon={enminus} p2text="İcra edildi" p2percent="92%"/>
				<StatisticTable headerTitle="Regress" month="January" p1icon={deminus} p1text="Gözləmədə" p1percent="46%" p2icon={deminus} p2text="İcra edildi" p2percent="54%"/>
				<StatisticTable headerTitle="Financial support" month="January" p1icon={enplus} p1text="Gecikməli" p1percent="20%" p2icon={deminus} p2text="Ödəyir" p2percent="80%"/>
			</div>
			<Campaigns/>
		</div>
		<CompanyCard/>
	</div>
  )
}

export default MainPage;
