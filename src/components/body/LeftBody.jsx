import React from "react";
import InputForm from "./InputForm";

function LeftBody() {
  return (
    <div className="LeftBody col-lg-6">
      <h1>
        Hang out <br /> anytime, anywhere
      </h1>

      <p>
        Messenger makes it easy and fun to stay close to your favorite people.
      </p>

      <InputForm />
      <div>
        <img
          className="appMic col-3"
          src="https://scontent.frgn7-3.fna.fbcdn.net/v/t39.8562-6/119597221_2801552506611915_4465041091818364564_n.svg?_nc_cat=1&ccb=1-5&_nc_sid=6825c5&_nc_ohc=b__hN2jQSV8AX_Ac3fD&_nc_ht=scontent.frgn7-3.fna&oh=00_AT9mBjMYoppp0Xmt79mhea-2ENRlhAd6V-dqu5x2NehhQg&oe=621F1035"
          alt=""
        />
        <img
          className="appMic col-3 "
          src="https://scontent.frgn7-1.fna.fbcdn.net/v/t39.8562-6/119623783_679418069326044_1960140840932205061_n.png?_nc_cat=111&ccb=1-5&_nc_sid=6825c5&_nc_ohc=nbhXslg1imUAX_UmCaT&_nc_ht=scontent.frgn7-1.fna&oh=00_AT9XOHBIwUlvkB3LvZ7J5xA8aHpkr-sZ4kuDqC9uLgIo2Q&oe=621F7D5D"
          alt=""
        />
      </div>
    </div>
  );
}

export default LeftBody;
