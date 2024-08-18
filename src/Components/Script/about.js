import React from 'react';
import 'react-bootstrap'
import { useState } from 'react';
import { Document, Page ,pdfjs} from 'react-pdf';
import { Button, Container, Nav } from 'react-bootstrap';
import resume from 'C:/Users/navne/personalsite/src/pdf_sample.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const About =() =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    return(
        <div >
           <Container>  
            <h3>About Me</h3>
            <div>
                <p>I am a software developer with 3 years of experience, and currently a graduate student at Virginia Tech, Blacksburg. My personal interests are programming, deep learning, genomics and history.</p>
                <p>I graduated from National Institute of Technology Karnataka with a BTech in Electronics and Communication Engineering</p>
                <p>I am currently working on projects in Deep Genomics, Computer Vision, Machine Learning Fundamentals.</p>
            </div>
            </Container> 
            <Container>
                <Nav>
                   <Button onClick={()=>{setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1)}}>Next</Button> 
                   <Button onClick={()=>{setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1)}}>Prev</Button>
                <p>
					Page {pageNumber} of {numPages}
				</p>
                </Nav>

            <Document file={resume} onLoadSuccess={() =>{ setNumPages(4); setPageNumber(1);}} >
                <Page pageNumber={pageNumber} enderTextLayer={false} />
            </Document>
            </Container>
        </div>
    );
}

export default About;