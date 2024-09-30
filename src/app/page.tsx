import Footer from "./component/footer/page";
import NavBarItem from "./component/navbar/page";
import Case from "./component/screens/cases/page";
import Docs from "./component/screens/docs/page";
import Integrations from "./component/screens/integrations/page";
import Model from "./component/screens/models/page";
import Resource from "./component/screens/resources/page";
import Run from "./component/screens/run/page";
import Spotlight from "./component/screens/spotlight/page";


export default function Home() {
	return (
		<>
			<NavBarItem/>	
			<Spotlight />
			<Model />
			<Integrations />
			<Run />
			<Case />
			<Resource />
			<Docs />
			<Footer />
		</>
	);
}
