import React from "react";
import Header from "../components/Header";
import CreateUsers from "../components/CreateUsers";

const CreateUsersPage = () => {

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <section>
          <CreateUsers></CreateUsers>
        </section>
      </main>
    </div>
  );
};

export default CreateUsersPage;
