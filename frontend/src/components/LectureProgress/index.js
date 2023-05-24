import {
    Container,
    ImageContainer,
    InfoContainer,
    TitleContainer,
    MoreInfoContainer,
    ProgressContainer,
    EtcContainer
} from "./style"

function LectureProgress() {

    return ( 
        <Container>
            {/* lecture image */}
            <ImageContainer>
                
            </ImageContainer>

            {/* lecture info */}
            <InfoContainer>   
                {/* lecture title */}
                <TitleContainer>
                    <span>강의 제목 올 자리</span>
                </TitleContainer>
                {/* more info */}
                <MoreInfoContainer>
                    <ProgressContainer>
                        {/* progress */}
                        <span>60%</span>
                    </ProgressContainer>
                    <EtcContainer>
                        {/* teacher & language */}
                        <span>OOO 선생님</span>
                        <span>파이썬</span>
                    </EtcContainer>
                </MoreInfoContainer>
            </InfoContainer>
            
        </Container>
     );
}

export default LectureProgress;