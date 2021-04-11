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
                <div className="gender-section row">
                    <div className='col-2'><img src={process.env.PUBLIC_URL + "/images/man.PNG"} /></div>
                    {getGenderWise.MaleGender && <React.Fragment><div className='col-3'>
                        {getGenderWise.MaleGender.mood}<span>Pulse</span></div>
                        <div className='col-3'>
                            {getGenderWise.MaleGender.progress}%<span>Progress</span></div>
                        <div className='col-4'>
                            {getGenderWise.MaleGender.criticalEmployee}<span>Critical Employee</span>
                        </div>
                    </React.Fragment>
                    }
                </div>
                <div className="gender-section row">
                    <div className='col-2'><img src={process.env.PUBLIC_URL + "/images/woman.PNG"} /></div>
                    {getGenderWise.FemaleGender && <React.Fragment><div className='col-3'>
                        {getGenderWise.FemaleGender.mood}<span>Pulse</span></div><div className='col-3'>
                            {getGenderWise.FemaleGender.progress}%<span>Progress</span></div><div className='col-4'>
                            {getGenderWise.FemaleGender.criticalEmployee}<span>Critical Employee</span>
                        </div>
                    </React.Fragment>
                    }

                </div>
            </div>}
        </div>
    )
}