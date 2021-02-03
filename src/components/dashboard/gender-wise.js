import React from 'react'


export default (props) => {
    const { getGenderWise } = props
    return (
        <div className="card" style={{ float: 'left', width: '100%', height: '400px', backgroundColor: '#ffffff' }}>
            <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h6 className="card-title">Gender Wise View
            </h6>
                </div>

            </div>
            {getGenderWise && <div className="card-body">
                <div className="gender-section">
                    <img src={process.env.PUBLIC_URL + "images/man.PNG"} />
                    {getGenderWise.MaleGender && <div>
                        {getGenderWise.MaleGender.mood}<br /><span>Mood</span><br /><br />
                        {getGenderWise.MaleGender.progress}%<br /><span>Progress</span><br /><br />
                        <span>Critical Employee</span><br />
                        {getGenderWise.MaleGender.criticalEmployee}
                    </div>
                    }
                    <img src={process.env.PUBLIC_URL + "images/woman.PNG"} />
                    {getGenderWise.FemaleGender && <div>
                        {getGenderWise.FemaleGender.mood}<br /><span>Mood</span><br /><br />
                        {getGenderWise.FemaleGender.progress}%<br /><span>Progress</span><br /><br />
                        <span>Critical Employee</span><br />
                        {getGenderWise.FemaleGender.criticalEmployee}
                    </div>
                    }

                </div>
            </div>}
        </div>
    )
}