// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';
import ActiveProjectsData from "data/dashboard/ActiveProjectsData";
import {
  AboutMe,
  ActivityFeed,
  MyTeam,
  ProfileHeader,
  ProjectsContributions,
  RecentFromBlog
} from 'sub-components'
import DefaultDashboardLayout from '../../layouts/DefaultDashboardLayout'

const Menus = () => {
  return (
    <DefaultDashboardLayout>
      {/* Page Heading */}

      {/* Profile Header  */}
      <ProfileHeader/>

      {/* content */}
      <div className="py-6 m-2">
        <Row>

          {/* About Me */}
          <AboutMe />

          {/* Projects Contributions */}
          <ProjectsContributions />

          {/* Recent From Blog */}
          <RecentFromBlog />

          <Col xl={6} lg={12} md={12} xs={12} className="mb-6">

            {/* My Team */}
            <MyTeam />

            {/* Activity Feed */}
            <ActivityFeed />

          </Col>
        </Row>
      </div>
     
    </DefaultDashboardLayout>
  )
}

export default Menus