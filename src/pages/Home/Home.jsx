import Footer from "../Shared/Footer/Footer";
import AvailablrFeature from "./AvailableFeature/AvailableFeature";
// import HeadersDropdown from '../Shared/Headers/HeadersDropdown';
import Banner from "./Banner/Banner";
import BestDoctor from "./BestDoctor/BestDoctor";
import BrowseBySpecilities from "./BrowseBySpecilities/BrowseBySpecilities";
import LookingFor from "./LookingFor/LookingFor";
import MainService from "./MainService/MainService";
import Newsletter from "./Newsletter/Newsletter";
import Specialities from "./Specialities/Specialities";

const Home = () => {
    return (
        <div>
            {" "}
            {/* <HeadersDropdown></HeadersDropdown> */}
            <Banner> </Banner> <MainService> </MainService> <Specialities> </Specialities> <LookingFor> </LookingFor>{" "}
            <BrowseBySpecilities> </BrowseBySpecilities> <BestDoctor> </BestDoctor>{" "}
            <AvailablrFeature> </AvailablrFeature> <Newsletter> </Newsletter> <Footer> </Footer>{" "}
        </div>
    );
};

export default Home;
