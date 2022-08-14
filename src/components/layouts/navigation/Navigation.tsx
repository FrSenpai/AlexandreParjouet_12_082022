import { Navigate, Route, Routes } from "react-router-dom";
import { Profile } from "../../../pages/Profil";

export function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="profile/18" />} />
            <Route path="profile">
                <Route path=":id" element={<Profile />} />
            </Route>
            {/* <Route path="*" element={<Error />}>
                <Route path=":error" element={<Error />}></Route>
            </Route> */}
        </Routes>
    )

}