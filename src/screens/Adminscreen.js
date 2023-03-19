import React from "react";
import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import Bookings from "../components/Bookings";
import Rooms from "../components/Rooms";
import Users from "../components/Users";
import Addroom from "../components/Addroom";



function Adminscreen() {
  const { TabPane } = Tabs;
  const navigate = useNavigate();

  if (!JSON.parse(localStorage.getItem("currentUser"))) {
    navigate("/login");
  }

  if (!JSON.parse(localStorage.getItem("currentUser")).isAdmin) {
    navigate("/home");
  }

  return (
    <div className="ml-3 mr-3 mt-3 mb-3 bs">
      <h2 className="text-center" style={{ fontSize: "30px" }}>
        Admin Panel
      </h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Bookings" key="1">
          <Bookings />
        </TabPane>
        <TabPane tab="Rooms" key="2">
          <Rooms />
        </TabPane>
        <TabPane tab="Add Room" key="3">
          <Addroom />
        </TabPane>
        <TabPane tab="Users" key="4">
          <Users />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Adminscreen;
