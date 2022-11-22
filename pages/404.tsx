import Router from "next/router";

function Custom404() {
  return (
    <div className="justify-items-center align-items-center">
      <div>Whoops...</div>
      <button className="border-bpisg bg-bpisg rounded-md"
        onClick={() => {
          Router.push('/');
        }}
      >
        Go Back!
      </button>
    </div>
  );
}

export default Custom404;
