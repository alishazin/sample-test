import NavBar from '../sections/NavBar';
import "../styles/pages/table.css"

function Table() {

	return (
		<>
			<NavBar redirect={true} />
            <main>
                <h1>Employee Details</h1>
                <div className='table'>
                    <div className='row header'>
                        <div className='item one'>ID</div>
                        <div className='item two'>Employee Name</div>
                        <div className='item two'>Designation</div>
                        <div className='item three'>Salary</div>
                        <div className='item three'>Qualification</div>
                        <div className='item four'>Location</div>
                    </div>
                    <div className='row'>
                        <div className='item one'>1</div>
                        <div className='item two'>John Doe</div>
                        <div className='item two'>Project Manager </div>
                        <div className='item three'>₹150,00</div>
                        <div className='item three'>B.Tech</div>
                        <div className='item four'>New Delhi</div>
                    </div>
                    <div className='row'>
                        <div className='item one'>2</div>
                        <div className='item two'>John Doe</div>
                        <div className='item two'>Project Manager </div>
                        <div className='item three'>₹150,00</div>
                        <div className='item three'>B.Tech</div>
                        <div className='item four'>New Delhi</div>
                    </div>
                    <div className='row'>
                        <div className='item one'>3</div>
                        <div className='item two'>John Doe</div>
                        <div className='item two'>Project Manager </div>
                        <div className='item three'>₹150,00</div>
                        <div className='item three'>B.Tech</div>
                        <div className='item four'>New Delhi</div>
                    </div>
                    <div className='row'>
                        <div className='item one'>4</div>
                        <div className='item two'>John Doe</div>
                        <div className='item two'>Project Manager </div>
                        <div className='item three'>₹150,00</div>
                        <div className='item three'>B.Tech</div>
                        <div className='item four'>New Delhi</div>
                    </div>
                    <div className='row'>
                        <div className='item one'>5</div>
                        <div className='item two'>John Doe</div>
                        <div className='item two'>Project Manager </div>
                        <div className='item three'>₹150,00</div>
                        <div className='item three'>B.Tech</div>
                        <div className='item four'>New Delhi</div>
                    </div>
                    <div className='row'>
                        <div className='item one'>6</div>
                        <div className='item two'>John Doe</div>
                        <div className='item two'>Project Manager </div>
                        <div className='item three'>₹150,00</div>
                        <div className='item three'>B.Tech</div>
                        <div className='item four'>New Delhi</div>
                    </div>
                    <div className='row'>
                        <div className='item one'>7</div>
                        <div className='item two'>John Doe</div>
                        <div className='item two'>Project Manager </div>
                        <div className='item three'>₹150,00</div>
                        <div className='item three'>B.Tech</div>
                        <div className='item four'>New Delhi</div>
                    </div>
                </div>
            </main>
		</>
	);
}


export default Table;
