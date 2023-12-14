import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <div className="user"></div>
          <div className="user">
            <div className="userInfo">
            <img
                src="https://thebloodconnection.org/wp-content/uploads/2019/06/WBDD2-1080x675.jpg"
                alt=""
                width="140"
                height="100"
              />
            <div className="buttons"></div>
          </div>
        </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.milled.com/2020-10-07/S4WECXYKMZNkEZMK/nxlLAjK3RryY.gif"
                alt=""
                width="280"
                height="280"
              />
            </div>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user"></div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
