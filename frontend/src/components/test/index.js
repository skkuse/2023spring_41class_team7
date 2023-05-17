function SmallList(props) {

    return(
        <div style={{display: "flex", flexDirection: "row"}}>
            {props.context}
            <div>삭제</div>
            <button>소단원 추가</button>
        </div>
        
        
    );

}

export default SmallList;