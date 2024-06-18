import React from "react";

const Page = () => {
  const FeaturedPost = {
    postAuthor: "denolp",
    feauredPost: "possting ",
    FeaturedDescription:
      " We are always here to help we are able to provide multiple types of services as well as be able to help you with any other ones you may need help on as well as we would like to introduce to you the help me nft that will be coming soon, once you purchase this nft you will be able to recieve much help and be able to contact our service and recivce small discount.  ",
  };

  return (
    <main>


   
        <header>
            <h2>Featured Post</h2>
            <p>Author: {FeaturedPost.postAuthor}</p>
        </header>

        <p>
            {FeaturedPost.FeaturedDescription}
        </p>

        



    </main>
  );
};

export default Page;
