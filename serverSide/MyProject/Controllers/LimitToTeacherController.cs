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
    [RoutePrefix("api/LimitToTeacher")]
    public class LimitToTeacherController : ApiController
    {
        //הוספת תחום למורה
        [HttpPut]
        [Route("AddLimitToTeacher")]
        public IHttpActionResult AddLimitToTeacher(LimitToTeacherDTO limToTeach)
        {
            return Ok(LimitToTeacherBL.AddLimitToTeacher(limToTeach));
        }

        [HttpGet]
        [Route("getLimitToTeacher/{limit}")]
        public IHttpActionResult getLimitToTeacher(int limit)
        {
            return Ok(LimitToTeacherBL.getLimitToTeacher(limit));
        }
        
        [HttpGet]
        [Route("getLimitByidAndTeacher/{limit}/{teacher}")]
        public IHttpActionResult getLimitByidAndTeacher(int limit, int teacher)
        {
            return Ok(LimitToTeacherBL.getLimitByidAndTeacher(limit, teacher));
        }

        [HttpPost]
        [Route("GetUsereByIdAndpass")]
        public IHttpActionResult GetUsereByIdAndpass(LimitToTeacherDTO ltt)
        {
            return Ok(LimitToTeacherBL.GetUsereByIdAndpass(ltt.CodeLimit, ltt.CodeTeacher));
        }

       

    }
}
