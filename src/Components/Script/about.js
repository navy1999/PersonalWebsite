import React from 'react';
import 'react-bootstrap'
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button, Container, Nav } from 'react-bootstrap';
import resume from 'C:/Users/navne/personalsite/src/Navneet_Resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  );
const About =() =>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    return(
        <div >
           <Container>  
            <h3>About Me</h3>
            <div>
                <p>I am a software developer with over 2 years of experience. My personal interests are programming, deep learning, genomics and history.</p>
                <p>I graduated from National Institute of Technology Karnataka with a BTech in Electronics and Communication Engineering</p>
                <p>The Tech stack that I currently work with includes Java, Springboot , Scala, Apache Spark, FTL, Apache Hadoop, Hive, Impala, SQL, ReactJS & AngularJS. In addition I have good experience working with C, C++, Python and also dabbled in Kotlin</p>
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

            <Document file={resume} onLoadSuccess={() =>{setNumPages(2);}} >
                <Page pageNumber={pageNumber}></Page>
            </Document>
            </Container>
        </div>
    );
}

export default About;