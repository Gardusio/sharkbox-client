
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../common/layouts/Layout';
import AdminHome from "../admin/AdminHome"
import LoginPage from '../auth/LoginPage';
import RegisterPage from '../auth/RegisterPage';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import CreateCoursePage from '../admin/courses/CreateCoursePage';
import CoursePage from '../admin/courses/CoursePage';
import CourseListPage from '../admin/courses/CourseListPage';
import CreateLessonPage from '../admin/lessons/pages/CreateLessonPage';
import LessonPage from '../admin/lessons/pages/LessonPage';
import PartecipantsPage from '../admin/lessons/pages/PartecipantsPage';


function BoxRoutes() {
    const { user } = useContext(UserContext)

    const loggedIn = user ? true : false

    const adminLoggedIn = loggedIn && user.role === "ADMIN";

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/" element={<Layout />}>
                    <Route index element={<AdminHome user={user} />} />

                    <Route path="/corsi" element={<CourseListPage />} />
                    <Route path="/corsi/crea" element={<CreateCoursePage />} />
                    <Route path="/corsi/modifica/:id" element={<CoursePage />} />

                    <Route path="/lezioni/crea" element={<CreateLessonPage />} />
                    <Route path="/lezioni/:id" element={<LessonPage />} />
                    <Route path="/lezioni/:lessonId/partecipanti" element={<PartecipantsPage />} />

                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default BoxRoutes

/*

<Route index element={loggedIn ? (
                        adminLoggedIn ?
                            <AdminHome user={user} /> :
                            <UserHome user={user} />)
                        : <Navigate to="/login" />} />

                                            <Route path="/corsi" element={adminLoggedIn ? <CourseListPage /> : <Navigate to="/login" />} />
                    <Route path="/corsi/crea" element={adminLoggedIn ? <CreateCoursePage /> : <Navigate to="/login" />} />
                    <Route path="/corsi/:id" element={adminLoggedIn ? <CoursePage /> : <Navigate to="/login" />} />


*/