import Link from "next/link";
import { useTransition, animated as a } from "react-spring";

import GalleryButton from "./gallerybutton";

interface Props {
  main: boolean;
  toptext?: string;
  bottext?: string;
  schoolname?: boolean;
  clicked: any;
}

const GalleryContent = (props: Props) => {
  const transitionsTop = useTransition(props, {
    from: { opacity: 0, transform: "translateY(-100%)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.9)" },
    exitBeforeEnter: true,
  });

  const transitionsMid = useTransition(props, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0.8)" },
    exitBeforeEnter: true,
  });

  const transitionsButton = useTransition(props, {
    from: { opacity: 0 },
    enter: { opacity: 1, transform: "scale(1)", visibility: "visible" },
    leave: { opacity: 0, transform: "scale(0.4)", display: "none" },
    exitBeforeEnter: true,
  });

  const transitionsBack = useTransition(props, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: "none" },
    exitBeforeEnter: true,
  });

  return (
    <div className="min-w-screen min-h-screen max-h-screen max-w-screen grid grid-cols-7 lg:grid-cols-9 text-center">
      <GalleryButton
        clicked={props.clicked}
        style="hidden lg:block col-span-1 h-10 w-10 md:h-20 md:w-20 self-center text-white text-center align-middle text-xl md:text-4xl rounded-full bg-bpisgry2/30 hover:bg-bpisg z-20 mx-auto"
        type="decrease"
      />
      <div className="col-span-7 justify-center flex flex-col z-20 text-white">
        {transitionsTop((animation, props) => {
          return (
            <a.h3
              className="text-2xl pt-10 md:text-5xl xl:text-7xl pb-16 font-semibold"
              style={{
                ...animation,
              }}
            >
              {props.toptext}
              <>
                {props.schoolname ? (
                  <span className="text-bpisg"> BPIS</span>
                ) : (
                  <></>
                )}
              </>
            </a.h3>
          );
        })}

        {transitionsMid((animation, props) => {
          return (
            <a.p
              className="justify-center font-normal text-base md:text-lg xl:text-xl tracking-wider text-bpisgry2 pb-16"
              style={{
                ...animation,
              }}
            >
              {props.bottext}
            </a.p>
          );
        })}

        {!props.main && (
          <>
            {transitionsButton((animation) => {
              return (
                <a.button
                  className="hover:bg-bpisg w-1/2 md:w-1/5"
                  style={{
                    visibility: "hidden",
                    lineHeight: "2.5rem",
                    textTransform: "uppercase",
                    borderStyle: "solid",
                    borderColor: "white",
                    borderWidth: "1px",
                    alignSelf: "center",
                    borderRadius: "1.5rem",
                    ...animation,
                  }}
                >
                  <Link href="/vision" className="h-full w-full">Learn More</Link>
                </a.button>
              );
            })}
          </>
        )}
      </div>
      <GalleryButton
        clicked={props.clicked}
        style="hidden lg:block col-start-9 col-end-10 h-10 w-10 md:h-20 md:w-20 self-center text-white text-center align-middle text-xl md:text-4xl rounded-full bg-bpisgry2/30 hover:bg-bpisg z-20 mx-auto"
        type="increase"
      />
      {!props.main && (
        <>
          {transitionsBack((animation) => {
            return (
              <a.div
                className="w-screen h-full absolute top-20 text-center bg-bpisshdwless"
                style={{ ...animation }}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default GalleryContent;
