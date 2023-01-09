import React from "react";
//hooks to delete and update
import useUpdate from "../customHooks/useUpdate";
import useDelete from "../customHooks/useDelete";
//get current logged user
import { getUser } from "../context/slice/userSlice";
//methods form redux toolkit
import { useSelector, useDispatch } from "react-redux";
//extraReducer from redux store
import { deleteHero } from "../context/slice/heroesSlice";
//reducer from reduc store
import { selectAllHeroes } from "../context/slice/heroesSlice";
//components from material ui
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { Button, Modal } from "@mui/material";
//components for handle delete and update
import DeleteHero from "../components/ManageHeroes/deleteHero";
import UpdateHero from "../components/ManageHeroes/updateHero";

/**
 * @constant 
 * @type {View}
 * @returns Rendered gestion heroes
 */
const GestionHeroes = () => {

    /**
     * @constant
     * @type {object}
     * @default [null]
     */
    const user = useSelector(getUser);

    /**
     * @funtion
     * @type {Array}
     * @default []
     */
    const data = useSelector(selectAllHeroes);

    /**
     * @function [dispatch]
     * dispatch actions/reducers from redux store
     */
    const dispatch = useDispatch();

    /**
     * 
     */
    const { heroData, openUP, setButtonId, setOpenUP } = useUpdate(data);

    /**
     * @method
     * @returns set boolean to false to close update modal
     */
    const handleCloseUP = () => setOpenUP(false);
    
    //delete
    const { openDEL, buttonDel, setButtonDel, setOpenDEL } = useDelete()

    /**
     * @method
     * @returns set boolean to false to close delete modal
     */
    const handleCloseDEL = () => setOpenDEL(false);

    /**
     * @method
     * dispatch method to delete target hero and close modal (setTimeout)
     */
    const handleDelete = () => {
        const data = {
            id: buttonDel,
            token: user.user.token
        }
        dispatch(deleteHero(data));

        setTimeout(() => {
            setOpenDEL(false);
        }, 2000);
    };

    /**
     * @constant
     * @type {Array}
     * Structure the columns
     */
    const columns = [
        {
            field: "_id", headerName: "ID"
        },
        {
            field: "name", headerName: "Name"
        },
        {
            field: "skill", headerName: "Skill", width: 450
        },
        {
            field: "healthPoints", headerName: "HealthPoint"
        },
        {
            field: "damage", headerName: "Damage"
        },
        {
            field: "defense", headerName: "Defense"
        },
        {
            field: "speed", headerName: "Speed"
        },
        {
            field: "level", headerName: "Level"
        },
        {
            field: "gold", headerName: "Gold"
        },
        {
            field: "weapons", headerName: "Weapons", width: 250
        },
        {
            field: "delete", headerName: "Kill", renderCell: (props) => {
                return <Button component="button" className="addEvent" variant="contained" size="small" value={ props.id } onClick={(e) => setButtonDel(e.target.value)}>Kill</Button>
            }
        },
        {
            field: "update", headerName: "Update", renderCell: (props) => {
                return <Button value={ props.id } component="button" className="addEvent" variant="contained" size="small" sx={{ backgroundColor: "green" }} onClick={(e) => setButtonId(e.target.value)}>Update</Button>
            }
        }
    ];

    return ( 
        <div className="gestionHeroes" style={{ width: "100%", height: "100%" }}>
            <DataGrid
            rows={data}
            columns={columns}
            getRowId={(row) => row._id}
            disableSelectionOnClick={true}
            disableColumnMenu={true}
            sx={{ border: "3px solid black", backgroundColor: "rgba(0, 0, 0, 0.9)", width: "95vw", height: "80vh", marginTop: "4rem", marginLeft: "2.5rem", padding: "1rem" }}
            />
            <Modal
            open={openDEL}
            onClose={handleCloseDEL}
            disableEscapeKeyDown={true}
            hideBackdrop={true}
            >
                <div>
                <DeleteHero>
                    <Button component="button" variant="contained" size="small" color="primary" onClick={handleDelete}> kill</Button>
                    <Button component="button" variant="contained" size="small" color="success" onClick={handleCloseDEL}> Go Back</Button>
                </DeleteHero> 
                </div>
            </Modal>
            <Modal
            open={openUP}
            onClose={handleCloseUP}
            disableEscapeKeyDown={true}
            hideBackdrop={true}
            >
                <div>
                    <UpdateHero heroData={heroData} fn={handleCloseUP} />
                </div>
            </Modal>
        </div>
    );
}
 
export default GestionHeroes;