

const Firma = ({datosFirma}) => {

    const {nombre, email, cargo, tel} = datosFirma

  return (
    <>
        <table style={{padding: '20px'}}>  
            <tbody>
                <tr>
                    <td> 
                    
                        <table style={{paddingBottom: '15px', borderBottom: '2px solid #CACACA', width: '100%'}}>
                            <tbody>
                                <tr>
                                    <td style={{padding: '10px 40px 0 0'}}>
                                        <img width="180" src="https://res.cloudinary.com/dq2kjqcxd/image/upload/v1668377748/logo_tyegnm.png" alt=""/>
                                    </td>
                    
                                    <td style={{padding: '10px 60px 10px 40px', borderLeft: '2px solid #CACACA'}}>
                                        <p style={{margin: '0', fontSize: '16px', fontWeight: '600', color: '#fc0000'}}>{nombre}</p>
                                        <p style={{margin: '0', fontSize: '14px', fontWeight: '400', color: '#797979'}}>{cargo}</p>
                                        <p style={{margin: '0', fontSize: '12px', fontWeight: '600', color: '#666666'}} >{tel}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            
                    
                        <table style={{paddingTop: '15px'}}>
                            <tbody>
                                <tr>
                                    <td style={{paddingRight: '5px'}}>
                                        <a href="https://www.linkedin.com/company/prosumia/mycompany/" target="_blank">
                                            <img width='35' src="https://res.cloudinary.com/dq2kjqcxd/image/upload/v1668377748/ico-linkedin_lncobi.png" alt=""/>
                                        </a>
                                        
                                    </td>
                                    <td style={{paddingRight: '10px'}}>
                                        <a href="https://www.instagram.com/prosumia/" target="_blank">
                                            <img width='35' src="https://res.cloudinary.com/dq2kjqcxd/image/upload/v1668377748/ico-insta_xcm2m4.png" alt=""/>
                                        </a>
                                    </td>
                                    <td>
                                        <p style={{fontSize: '16px', color: '#797979'}}>@prosumia</p>
                                    </td>
                
                                    <td style={{paddingRight: '5px', textAlign: 'right', width: '100%'}}>
                                        <a href="https://www.certipedia.com/quality_marks/9000004019?locale=es" target="_blank">
                                            <img width='45' src="https://res.cloudinary.com/dq2kjqcxd/image/upload/v1668377748/logo-iso_ii8vyq.png" alt=""/>
                                        </a>
                                    </td>
                                    <td style={{textAlign: 'right', width: '100%'}}>
                                        <a href="https://certificaciones.greatplacetowork.com.ar/prosumia" target="_blank">
                                            <img width='45' src="https://res.cloudinary.com/dq2kjqcxd/image/upload/v1668377748/logo-gptw_dov5rg.png" alt=""/>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default Firma