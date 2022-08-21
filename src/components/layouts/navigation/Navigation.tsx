import { Navigate, Route, Routes } from "react-router-dom";
import { Error } from "../../../pages/error/Error";
import { Profile } from "../../../pages/profile/Profile";



export function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="profile/18" />} />
            <Route path="profile"  >
                <Route path="/profile" element={<Error />} />
                <Route path=":id" element={<Profile />} />
            </Route>
            <Route path="error" element={<Error />}></Route>
            <Route path="*" element={<Error />}></Route>
        </Routes>
    )

}