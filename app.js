import axios from "axios";

async function getData(id) {
      try {
         const {data:user} = await axios("https://jsonplaceholder.typicode.com/users/" + id)
         const {data:post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id)
      
         const AllData = {
          userInfo: user, // Kullanıcının bilgileri
          userPosts: post, // Kullanıcının post'ları
         };

      console.log(AllData);
    }

    catch (e) {

      console.error(e);
      
    }


}

export default getData;

