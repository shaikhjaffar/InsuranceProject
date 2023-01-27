import NoteContext from "./noteContext"

const NoteState = (props) =>{
    const s1 = {
        name :"Jaffar",
        class : "CivilEngineer"
    }
    return (
        <NoteContext.Provider value={{s1}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState
