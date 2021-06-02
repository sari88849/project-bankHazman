using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using DTO;
using DAL;


namespace MyProject.Controllers
{
    [RoutePrefix("api/Users")]

    public class UsersController : ApiController
    {
        //שליפה
        [HttpGet]
        [Route("getUsers")]
        public IHttpActionResult getUsers()
        {
            return Ok(UsersBL.getUsers());
        }
        [HttpGet]
        [Route("try1/{date}")]
        public IHttpActionResult try1(DateTime date)
        {
            return Ok(UsersBL.getUsers());
        }


        [HttpPost]
        [Route("GetUsereByIdAndpass")]
        public IHttpActionResult GetUsereByIdAndpass(UseresDTO user)
        {
            return Ok(UsersBL.GetUsereByIdAndpass(user.FName, user.Password));
        }

        //הוספה
        [HttpPost]
        [Route("AddUser")]
        public IHttpActionResult AddUser(UseresDTO user)
        {
            return Ok(UsersBL.AddUser(user));
        }

        // מחזיר רשימת מורים ע"פ בקשות
        [HttpGet]
        [Route("getUserIsCorrect/{user}/{sector}/{min}/{time}/{codeLimit}")]
        public IHttpActionResult getUserIsCorrect(int user, int sector, int min, Nullable<int> time, int codeLimit)
        {
            return Ok(UsersBL.getUserIsCorrect(user, sector, min, time, codeLimit));
        }

        //פונקצייה שמחזירה את פרטי המשתמש
        [HttpGet]
        [Route("getttUser/{id}")]
        public IHttpActionResult getttUser(int id)
        {
            return Ok(UsersBL.getUser(id));
        }
        [HttpGet]
        [Route("getUserById/{id}")]
        public IHttpActionResult getUserById(int id)
        {
            return Ok(UsersBL.getUser(id));
        }

        [HttpGet]
        [Route("getMin1/{id}")]
        public IHttpActionResult getMin1(int id)
        {
            int i = UsersBL.getMin1(id);
            return Ok(i);
        }


        [HttpGet]
        [Route("getMin2/{id}")]
        public IHttpActionResult getMin2(int id)
        {
            int i = UsersBL.getMin2(id);
            return Ok(i);
        }

        //עדכון
        [HttpPost]
        [Route("update")]
        public IHttpActionResult update(UseresDTO user)
        {
            return Ok(UsersBL.update(user));
        }

        //המלצות ותגובות
        //מציאת קוד תחום למורה ע"פ קוד מורה וקוד תחום
        [HttpGet]
        [Route("RecommendationText/{codeUser}/{codeLim}")]
        public IHttpActionResult RecommendationText(int codeUser, int codeLim)
        {
            return Ok(UsersBL.RecommendationText(codeUser, codeLim));
        }
        [HttpPost]
        [Route("getUserByDateAndMail")]
        public IHttpActionResult getUserByDateAndMail(UseresDTO u)
        {
            return Ok(UsersBL.getUserByDateAndMail(u.Mail));
        }

        [HttpGet]
        [Route("SendMail/{result}/{email}")]
        public IHttpActionResult SendMail(string result, int email)
        {
            MailBLUser.mailSendUser(result,email);
            return Ok(true);
        }


    }
}
