import NavBarItem from "./component/navbar/page";
import Integrations from "./component/screens/integrations/page";
import Model from "./component/screens/models/page";
import Spotlight from "./component/screens/spotlight/page";


export default function Home() {
	return (
		<>
			<NavBarItem/>	
			<Spotlight />
			<Model />
			<Integrations />
		</>
	);
}
