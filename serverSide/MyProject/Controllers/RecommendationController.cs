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
    [RoutePrefix("api/Recommendation")]
    public class RecommendationController : ApiController
    {
        [HttpGet]
        [Route("getRecommendation/{codeTeach}/{limit}")]

        public IHttpActionResult getRecommendation(int limit)
        {
            return Ok(RecommendationBL.getRecommendation(limit));
        }

        //הוספה
        [HttpPut]
        [Route("AddRecommendation")]
        public IHttpActionResult AddRecommendation(RecommendationDTO limitToTeacher)
        {
            return Ok(RecommendationBL.AddRecommendation(limitToTeacher));
        }

        //בדיקה כמה תגובות יש לכל בנ"א
        [HttpGet]
        [Route("getCountReply/{codeuser}")]
        public IHttpActionResult getCountReply(int codeuser)
        {
            int i = RecommendationBL.getCountReply(codeuser);
            return Ok(i);
        }
    }
}
