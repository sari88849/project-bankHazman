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
    [RoutePrefix("api/Times")]
    public class TimesController : ApiController
    {
        [HttpGet]
        [Route("getTimes")]
        public IHttpActionResult getTimes()
        {
            return Ok(TimesBL.getTimes());
        }
        [HttpGet]
        [Route("getTimeById/{id}")]
        public IHttpActionResult getTimeById(int id)
        {
            return Ok(TimesBL.getTimeById(id));
        }
    }
}
