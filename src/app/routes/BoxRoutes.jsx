
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../common/layouts/Layout';
import AdminHome from "../admin/AdminHome"
import UsreHome from "../users/UserHome"
import LoginPage from '../auth/LoginPage';
import RegisterPage from '../auth/RegisterPage';
import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import CreateCoursePage from '../admin/courses/pages/CreateCoursePage';
import CoursePage from '../admin/courses/pages/CoursePage';
import CourseListPage from '../admin/courses/pages/CourseListPage';
import CreateLessonPage from '../admin/lessons/pages/CreateLessonPage';
import LessonPage from '../admin/lessons/pages/LessonPage';
import PartecipantsPage from '../admin/lessons/pages/PartecipantsPage';
import UserHome from '../users/UserHome';


function BoxRoutes() {
    const { user } = useContext(UserContext)

    const loggedIn = user ? true : false

    const adminLoggedIn = loggedIn && user.role === "ADMIN";

    const authenticatedPage = (page) => loggedIn ? page : <Navigate to="/login" />

    const adminPage = (page) => adminLoggedIn ? page : <Navigate to="/login" />

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/" element={<Layout />}>
                    <Route index element={
                        adminLoggedIn ?
                            <AdminHome user={user} />
                            :
                            loggedIn ?
                                <UserHome user={user} />
                                : <Navigate to="/login" />
                    } />

                    <Route path="/corsi" element={
                        adminPage(<CourseListPage />)} />
                    <Route path="/corsi/crea" element={
                        adminPage(<CreateCoursePage />)} />
                    <Route path="/corsi/modifica/:id" element={
                        adminPage(<CoursePage />)} />

                    <Route path="/lezioni/crea" element={
                        adminPage(<CreateLessonPage />)} />
                    <Route path="/lezioni/:id" element={
                        adminPage(<LessonPage />)} />
                    <Route path="/lezioni/:lessonId/partecipanti" element={
                        adminPage(<PartecipantsPage />)
                    } />

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