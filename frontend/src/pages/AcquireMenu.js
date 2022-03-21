import React, { useEffect } from "react";
import { useStateIfMounted } from "use-state-if-mounted";

import { getDocs, collection } from "firebase/firestore";
import { db } from "../services/firebase";

import Footer from "../components/Footer";
import Header from "../components/HeaderLogged";

import YourPost from "../components/YourPost";

export default function AcquireMenu() {
  const [postLists, setPostList] = useStateIfMounted([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);
  
  document.title = `Adquirir Projeto – Cantinn`;

  return (
    <div>
      <Header />
      <div>
        <div className="flex w-full flex-col justify-center px-14 py-20">
          <div className="mb-16 m-auto flex flex-col">
            <h1 className="font-semibold text-3xl mb-6">Marketplace</h1>
            {postLists.map((post) => {
              return <YourPost key={post.id} {...post} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
