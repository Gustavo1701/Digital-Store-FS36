import { Input } from "../components/Input";

const HomePage = () => {
    return (
        <>
        <Input 
        type="email"
        label={"Email"}
        id={"email"}
        placeholder={"Digite seu email"}
        className={"w-6/12"}
        />
        </>
     );
}
 
export default HomePage;