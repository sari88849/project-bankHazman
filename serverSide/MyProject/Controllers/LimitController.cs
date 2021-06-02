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
    [RoutePrefix("api/Limit")]
    public class LimitController : ApiController
    {
      
        [HttpGet]
        [Route("limitToFather/{limit}")]
        public IHttpActionResult limitToFather(int limit)
        {
            return Ok(LimitBL.limitToFather(limit));
        }
        [HttpGet]
        [Route("getLimitById/{limit}")]
        public IHttpActionResult getLimitById(int limit)
        {
            return Ok(LimitBL.getLimitById(limit));
        }

        //הוספה
        [HttpPut]
        [Route("AddLimit")]
        public IHttpActionResult AddLimit(LimitDTO limit)
        {
            return Ok(LimitBL.AddLimit(limit));
        }

        [HttpGet]
        [Route("getCountToLimit")]
        public IHttpActionResult getCountToLimit()
        {
            return Ok(LimitBL.getCountToLimit());
        }


        //כמה מקצועות יש לי מכל נושא כללי
        //[HttpGet]
        //[Route("getNumLimit")]
        //public IHttpActionResult getNumLimit(LimitDTO limit, int lim)
        //{
        //    return Ok(LimitBL.getNumLimit(limit, lim));
        //}



        //[HttpGet]
        //[Route("getNameLimit/{i}")]
        //public IHttpActionResult getNameLimit(int i)
        //{
        //    return Ok(LimitBL.getNameLimit(i));
        //}

    }
}
