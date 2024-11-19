import { Button } from "../components/Button";
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

        <Button
        labelColor={"white"}
        label={"Entrar"}
        color={"[var(--primary)]"}
        />
        </>
     );
}
 
export default HomePage;