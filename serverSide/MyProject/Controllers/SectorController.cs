using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using DTO;

namespace MyProject.Controllers
{
    [RoutePrefix("api/Sector")]
    public class SectorController : ApiController
    {
        [HttpGet]
        [Route("getSector")]
        public IHttpActionResult getSector()
        {
            return Ok(SectorBL.getSector());
        }

        [HttpGet]
        [Route("getSectorById/{sector}")]
        public IHttpActionResult getSectorById(int sector)
        {
            return Ok(SectorBL.getSectorById(sector));
        }
    }
}
