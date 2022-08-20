import Head from "next/head";
import CustomLayout from "../../../components/CustomLayout";
import type { NextPageWithLayout } from "../../_app"

const Profile:NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>Learning Log | User</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <div></div>
    </div>
  )
};

Profile.getCustomLayout = CustomLayout;

export default Profile;