import { useSelector } from "react-redux";

export default function Home() {
    const { currentUser } = useSelector(state => state.user);
    return (
        <div>Welcome Home, {currentUser.userName}</div>
    )
}
