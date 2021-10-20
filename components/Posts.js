import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Post from "./Post";

const posts = [
	{
		id: "123",
		username: "hrithik_k",
		userImg:
			"https://i.pinimg.com/736x/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg",
		img: "https://www.denofgeek.com/wp-content/uploads/2021/04/jujutsu-kaisen-season-2-movie-prequel-details.jpeg?fit=1920%2C1080",
		caption: "Squad Goals",
	},
	{
		id: "123",
		username: "hrithik_k",
		userImg:
			"https://i.pinimg.com/736x/8e/de/53/8ede538fcf75a0a1bd812810edb50cb7.jpg",
		img: "https://www.denofgeek.com/wp-content/uploads/2021/04/jujutsu-kaisen-season-2-movie-prequel-details.jpeg?fit=1920%2C1080",
		caption: "Squad Goals",
	},
];

function Posts() {
	const [posts, setPosts] = useState([]);

	useEffect(
		() =>
			onSnapshot(
				query(collection(db, "posts"), orderBy("timestamp", "desc")),
				(snapshot) => {
					setPosts(snapshot.docs);
				},
			),
		[db],
	);

	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					username={post.data().username}
					userImg={post.data().profileImg}
					img={post.data().image}
					caption={post.data().caption}
				/>
			))}
		</div>
	);
}

export default Posts;
